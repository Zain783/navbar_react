import React, { useState } from 'react';

const TabBar = () => {
  const [activeTab, setActiveTab] = useState('Form');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    if (activeTab === 'Form') {
      const randomFields = [
        { label: 'Name', type: 'text' },
        { label: 'Email', type: 'email' },
        { label: 'Age', type: 'number' },
        { label: 'Address', type: 'text' },
      ];

      return (
        <div>
          <h2>Basic Form</h2>
          <form>
            {randomFields.map((field, index) => (
              <div key={index}>
                <label>{field.label}</label>
                <input type={field.type} />
              </div>
            ))}
          </form>
        </div>
      );
    } else if (activeTab === 'List') {
      const data = ['Item 1', 'Item 2', 'Item 3'];

      return (
        <div>
          <h2>List</h2>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <button
          onClick={() => handleTabClick('Form')}
          style={{
            marginRight: '10px',
            background: activeTab === 'Form' ? '#ccc' : 'none',
          }}
        >
          Form
        </button>
        <button
          onClick={() => handleTabClick('List')}
          style={{
            background: activeTab === 'List' ? '#ccc' : 'none',
          }}
        >
          List
        </button>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default TabBar;
