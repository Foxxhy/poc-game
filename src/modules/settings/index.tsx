import { useState, useEffect } from 'react';
import { IConfigSettings } from '@/types';
import { useLog } from '@/hooks';

interface ModuleSettingsProps {
  settings: IConfigSettings;
  setSettings: (data: IConfigSettings) => void;
  saveSettings: (data: IConfigSettings) => void;
}

export const ModuleSettings = ({ settings, setSettings, saveSettings }: ModuleSettingsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempSettings, setTempSettings] = useState<IConfigSettings>(settings);

  const handleScreenChange = (key: 'width' | 'height', value: number) => {
    setTempSettings(prev => ({
      ...prev,
      screen: {
        ...prev.screen,
        [key]: value
      }
    }));
  };

  const handleDayChange = (value: number) => {
    setTempSettings(prev => ({
      ...prev,
      day: {
        ...prev.day,
        duration: value
      }
    }));
  };

  const handleSave = () => {
    useLog('warn', 'Settings saved');
    console.log(tempSettings);
    setSettings(tempSettings);
    saveSettings(tempSettings);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setTempSettings(settings);
    setIsOpen(false);
  };

  useEffect(() => {
    useLog('info', 'Settings loaded');
  }, []);

  useEffect(() => {
    if (isOpen) useLog('info', 'Settings is open');
    if (!isOpen) useLog('info', 'Settings is close');
  }, [isOpen]);

  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ padding: '8px 16px', marginBottom: '10px' }}
      >
        {isOpen ? 'Fermer Settings' : 'Ouvrir Settings'}
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
          <div style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Écran</h3>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Largeur:
              <input
                type="number"
                value={tempSettings.screen.width}
                onChange={(e) => handleScreenChange('width', parseInt(e.target.value))}
                style={{ marginLeft: '10px' }}
              />
            </label>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Hauteur:
              <input
                type="number"
                value={tempSettings.screen.height}
                onChange={(e) => handleScreenChange('height', parseInt(e.target.value))}
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>

          <div style={{ paddingBottom: '10px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Jour</h3>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Durée (secondes):
              <input
                type="number"
                value={tempSettings.day.duration}
                onChange={(e) => handleDayChange(parseInt(e.target.value))}
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>

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