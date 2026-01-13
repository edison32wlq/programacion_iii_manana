import './App.css'
import { ThemeProvider } from "./theme/ThemeContext";
import CssGlobalDemo from './components/CssGlobalDemo'
import InlineStyleDemo from './components/InlineStyleDemo'
import CssModuleDemo from './components/CssModuleDemo'
import StyledComponentsDemo from './components/StyledComponentsDemo'
import ThemedPanel from './components/ThemedPanel'
import ThemeToggle from './components/ThemeToggle'


function App() {
  return (

    <ThemeProvider>
      <main style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
        <h1 style={{ margin: "8px 0 16px 0", color: "var(--accent)" }}>Estilos clásicos</h1>

        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
          <ThemeToggle />
        </div>

        <div style={{ display: "grid", gap: 12 }}>
          <CssGlobalDemo />
          <InlineStyleDemo />
          <CssModuleDemo />
          <StyledComponentsDemo />
          <ThemedPanel />
        </div>
      </main>
    </ThemeProvider>
  )
}

export default App
