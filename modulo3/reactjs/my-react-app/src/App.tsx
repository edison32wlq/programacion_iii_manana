import Greeting from './props/Greeting'
import UserCard from './props/UserCard'
import Promedio from './components/Promedio'
import ButtonOne from './props/ButtonOne'
import ParentButtonOne from './props/ParentButtonOne'
import IncrementButton from './props/IncrementButton'
import ParentIncrementButton from './props/ParentIncrementButton'
import ParentInputNotifier from './props/ParentInputNotifier'
import InputNotifier from './props/InputNotifier'
import ParentUserList from './props/ParentUserList'
import ParentLoginForm from './props/ParentLoginForm'
import HoverFont from './useState/HoverFont'
import AccessWithLimit from './useState/AccessWithLimit'
import DocumentTitleChanger from './useState/DocumentTitleChanger'
import PostLikes from './useState/PostLikes'
import CheckboxSummary from './useState/CheckboxSummary'
import LoginWithLimit from './useState/LoginWithLimit'
import LanguageSwitcher from './useState/LanguageSwitcher'
import MultiSwitch from './useState/MultiSwitch'


function App() {
  const userData = { name: "Carlos", apellido: "Garcia", age: 30, direccion: "10 de Agosto", telefono: "0995678839" };
  return (
    <>
      <Greeting name="Francisco" />
      <Greeting name="Ana" />
      <UserCard user={userData} />
      <Promedio/>
      <ButtonOne/>
      <ParentButtonOne/>
      <IncrementButton/>
      <ParentIncrementButton/>
      <InputNotifier/>
      <ParentInputNotifier/>
      <ParentUserList/>
      <ParentLoginForm/>
      <HoverFont/>
      <AccessWithLimit/>
      <DocumentTitleChanger/>
      <PostLikes/>
      <CheckboxSummary/>
      <LoginWithLimit/>
      <LanguageSwitcher/>
      <MultiSwitch/>
    </>

    
  );
}

export default App;
