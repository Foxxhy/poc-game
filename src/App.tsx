import { useState } from 'react';
import {
  IConfigSettings,
  IConfigDebug,
  IConfigParty,
} from '@/types';
import {
  useSettings,
  useConfigs,
  useEnv,
  useLog,
  useDate
} from '@/hooks'
import {
  ModuleDebug,
  ModuleSettings,
  ModuleParty
} from '@/modules'

function App() {
  const { isDev } = useEnv();
  const {
    loadSettings,
    loadDebug,
    loadParty,
    saveDebug,
    saveSettings,
    saveParty
  } = useSettings();
  const {
    getDate,
    getDay,
    getHour,
    getPeriod
  } = useDate();

  const { configProject } = useConfigs();

  const [settings, setSettings] = useState<IConfigSettings>(loadSettings());
  const [debug, setDebug] = useState<IConfigDebug>(loadDebug());
  const [party, setParty] = useState<IConfigParty>(loadParty());

  if (isDev) {
    useLog('info', `Starting application with ${configProject.environment} environment`);
    console.log(settings);
    console.log(debug);
    console.log(party);
    console.log(getDate(), getDay(), getHour(), getPeriod());
  }

  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
      <ModuleParty party={party} setParty={setParty} saveParty={saveParty} />
      <ModuleSettings settings={settings} setSettings={setSettings} saveSettings={saveSettings} />
      {isDev && <ModuleDebug debug={debug} setDebug={setDebug} saveDebug={saveDebug}  />}
    </>
  )
}

export default App
