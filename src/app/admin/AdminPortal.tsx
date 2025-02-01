"use client";

import React, { useState, useEffect } from 'react';

const AdminPortal = () => {
  interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    duration: string;
    description: string;
  }

  const [data, setData] = useState({ 
    experiences: [] as ExperienceItem[], 
    experienceDetails: {} as { [key: string]: { title: string; company: string; duration: string; description: string } },
  });

  const [editItem, setEditItem] = useState<ExperienceItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('/api/experiences')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  interface NewItem {
    id: string;
    title: string;
    company: string;
    duration: string;
    description: string;
  }
  const handleAdd = (newItem: NewItem) => {
    fetch('/api/experiences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((newExperience: ExperienceItem) => {
        setData((prevData) => ({
          ...prevData,
          experiences: [...prevData.experiences, newExperience],
          experienceDetails: {
            ...prevData.experienceDetails,
            [newExperience.id]: {
              title: newExperience.title,
              company: newExperience.company,
              duration: newExperience.duration,
              description: newExperience.description,
            },
          },
        }));
      });
  };

  const handleUpdate = (updatedItem: ExperienceItem) => {
    fetch(`/api/experiences/${updatedItem.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((updatedExperience) => {
        setData((prevData) => ({
          ...prevData,
          experiences: prevData.experiences.map((item) =>
            item.id === updatedExperience.id ? updatedExperience : item
          ),
          experienceDetails: {
            ...prevData.experienceDetails,
            [updatedExperience.id]: {
              title: updatedExperience.title,
              company: updatedExperience.company,
              duration: updatedExperience.duration,
              description: updatedExperience.description,
            },
          },
        }));
        setEditItem(null);
      });
  };

  const handleDelete = (id: string) => {
    fetch(`/api/experiences/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setData((prevData) => ({
        ...prevData,
        experiences: prevData.experiences.filter((item) => item.id !== id),
        experienceDetails: Object.keys(prevData.experienceDetails)
          .filter((key) => key !== id)
          .reduce((obj: { [key: string]: any }, key) => {
            obj[key] = (prevData.experienceDetails as { [key: string]: any })[key];
            return obj;
          }, {}),
      }));
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 className="text-3xl mb-8" style={{ textAlign: 'center', textTransform: 'uppercase' }}>Admin Portal</h1>
      <div>
        <ul style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
          <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ flex: 1, textTransform: 'uppercase' }}>Title</div>
            <div style={{ flex: 1, textTransform: 'uppercase'}}>Company</div>
            <div style={{ flex: 1, textTransform: 'uppercase' }}>Duration</div>
            <div style={{ flex: 2, textTransform: 'uppercase' }}>Description</div>
            <div style={{ flex: 1, textTransform: 'uppercase' }}>Actions</div>
          </li>
          {data.experiences.map((exp) => (
            <li key={exp.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ flex: 1 }}>{exp.title}</div>
              <div style={{ flex: 1 }}>{exp.company}</div>
              <div style={{ flex: 1 }}>{data.experienceDetails[exp.id]?.duration ?? 'N/A'}</div>
              <div style={{ flex: 2 }}>{data.experienceDetails[exp.id]?.description ?? 'N/A'}</div>
              <div style={{ flex: 1 }}>
                <button style={{ color: 'blue', marginRight: '10px' }} onClick={() => setEditItem(exp)}>Update</button>
                <button style={{ color: 'blue' }} onClick={() => handleDelete(exp.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const titleInput = form.elements.namedItem('title') as HTMLInputElement;
            const companyInput = form.elements.namedItem('company') as HTMLInputElement;
            const durationInput = form.elements.namedItem('duration') as HTMLInputElement;
            const descriptionInput = form.elements.namedItem('description') as HTMLInputElement;
            
            const newItem = {
              id: Date.now().toString(),
              title: titleInput.value,
              company: companyInput.value,
              duration: durationInput.value,
              description: descriptionInput.value,
            };
            handleAdd(newItem);
            (e.target as HTMLFormElement).reset();
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}
        >
          <h2 className="text-2xl mb-6" style={{ textAlign: 'center', textTransform: 'uppercase' }}>Add New Experience</h2>
          <input name="title" placeholder="Title (e.g., Software Engineer)" required />
          <input name="company" placeholder="Company (e.g., Tech Corp)" required />
          <input name="duration" placeholder="Duration (e.g., Jan 2020 - Dec 2020)" required />
          <textarea name="description" placeholder="Description (e.g., Developed web applications...)" required />
          <button type="submit" style={{ color: 'blue' }}>Add</button>
        </form>
        {editItem && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const titleInput = form.elements.namedItem('title') as HTMLInputElement;
              const companyInput = form.elements.namedItem('company') as HTMLInputElement;
              const durationInput = form.elements.namedItem('duration') as HTMLInputElement;
              const descriptionInput = form.elements.namedItem('description') as HTMLInputElement;

              const updatedItem = {
                id: editItem.id,
                title: titleInput.value,
                company: companyInput.value,
                duration: durationInput.value,
                description: descriptionInput.value,
              };
              handleUpdate(updatedItem);
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}
          >
            <h2 className="text-2xl mb-6">Update Experience</h2>
            <input name="title" placeholder="Title" defaultValue={editItem.title} required />
            <input name="company" placeholder="Company" defaultValue={editItem.company} required />
            <input name="duration" placeholder="Duration" defaultValue={data.experienceDetails[editItem.id]?.duration} required />
            <textarea name="description" placeholder="Description" defaultValue={data.experienceDetails[editItem.id]?.description} required />
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" style={{ color: 'blue' }}>Update</button>
              <button type="button" onClick={() => setEditItem(null)} style={{ color: 'blue' }}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminPortal;