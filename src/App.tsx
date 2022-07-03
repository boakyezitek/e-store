import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
       <AppLogo logo={logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link href="https://reactjs.org">Learn React</Link>
      </Header>
    </div>
  );
}

interface Props {
  children: React.ReactNode;
}

const Header: FC<Props> = ({children}) => {
  return <header className="App-header">
    {children}
  </header>;
}

interface LinkProps {
  children: React.ReactNode;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

const Link: FC<LinkProps> = ({children,  ...resProps}) => {
  return <React.Fragment>
    <a className="App-link" { ...resProps }></a>
    {children}
  </React.Fragment> 
}

interface AppLogoProps {
  logo?: string
}

const AppLogo: FC<AppLogoProps> = ({logo}) => {
  return <>
  {Boolean(logo) && <img src={logo} className="App-logo" alt="logo" />}
  {Boolean(logo )|| "No image found"}
  </> 
}
Link.defaultProps={
  target:"_top",
  rel:"noopener noreferrer"
}
export default App;
