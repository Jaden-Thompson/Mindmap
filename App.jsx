import { useEffect } from 'react';
import { MindMapCanvas } from './components/MindMapCanvas';
import { Sidebar } from './components/Sidebar';
import { AIContextProvider } from './lib/AIContext';

export default function App() {
  return (
    <AIContextProvider>
      <div className="flex h-screen bg-[#0e0e0e] text-white">
        <Sidebar />
        <MindMapCanvas />
      </div>
    </AIContextProvider>
  );
}
