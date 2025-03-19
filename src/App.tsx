import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';
import { Button } from './components/ui/button';

function App() {
  return (
    <ThemeProvider storageKey="ui-theme">
      <div className="bg-slate-400">
        <Button>Click me</Button>
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
