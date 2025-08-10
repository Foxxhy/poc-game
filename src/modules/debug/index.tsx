import { useState, useEffect } from 'react';
import { IConfigDebug } from '@/types';
import { useLog } from '@/hooks';

interface ModuleDebugProps {
  debug: IConfigDebug;
  setDebug: (data: IConfigDebug) => void;
  saveDebug: (data: IConfigDebug) => void;
}

export const ModuleDebug = ({ debug, setDebug, saveDebug }: ModuleDebugProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempDebug, setTempDebug] = useState<IConfigDebug>(debug);

  const handleChange = (key: keyof IConfigDebug) => {
    setTempDebug(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    useLog('warn', 'Debug is saved');
    console.log(tempDebug);
    setDebug(tempDebug);
    saveDebug(tempDebug);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setTempDebug(debug);
    setIsOpen(false);
  };

  useEffect(() => {
    useLog('info', 'Debug is loaded');
  }, []);

  useEffect(() => {
    if (isOpen) useLog('info', 'Debug is open');
    if (!isOpen) useLog('info', 'Debug is close');
  }, [isOpen]);

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ padding: '8px 16px', marginBottom: '10px' }}
      >
        {isOpen ? 'Fermer Debug' : 'Ouvrir Debug'}
      </button>

      {isOpen && (
        <div style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="checkbox"
              checked={tempDebug.log}
              onChange={() => handleChange('log')}
            />
            Activer les logs
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="checkbox"
              checked={tempDebug.position}
              onChange={() => handleChange('position')}
            />
            Afficher les positions
          </label>
          <div style={{ 
            display: 'flex', 
            gap: '10px', 
            marginTop: '10px',
            justifyContent: 'flex-end' 
          }}>
            <button onClick={handleCancel}>Annuler</button>
            <button 
              onClick={handleSave}
              style={{ backgroundColor: '#4CAF50', color: 'white' }}
            >
              Enregistrer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};