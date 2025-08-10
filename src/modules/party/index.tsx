import { useState, useEffect } from 'react';
import { IConfigDebug, IConfigParty } from '@/types';
import { useLog } from '@/hooks';

interface ModulePartyProps {
  party: IConfigParty;
  setParty: (data: IConfigParty) => void;
  saveParty: (data: IConfigParty) => void;
}

export const ModuleParty = ({ party, setParty, saveParty }: ModulePartyProps) => {
  const handleSave = () => {
    useLog('warn', 'Party is saved');
    console.log(party);
    setParty(party);
    saveParty(party);
  };

  useEffect(() => {
    useLog('info', 'Save is loaded');
  }, []);


  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '160px' }}>
      <button 
        onClick={handleSave}
        style={{ padding: '8px 16px', marginBottom: '10px' }}
      >
        Enregistrer
      </button>
    </div>
  );
};