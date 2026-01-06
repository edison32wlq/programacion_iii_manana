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
import AutoCounter from './useState/AutoCounter'
import DynamicColor from './useState/DynamicColor'
import ClickHistory from './useState/ClickHistory'
import LogEffect from './useEffect/LogEffect'
import FetchUser from './useEffect/FetchUser'
import FetchUsers from './useEffect/FetchUsers'
import Clock from './useEffect/Clock'
import ScrollLogger from './useEffect/ScrollLogger'
import DynamicTitle from './useEffect/DynamicTitle'
import SafeFetch from './useEffect/SafeFetch'
import PersistCounter from './useEffect/PersistCounter'
import { LanguageContext } from './useContext/LanguageContext'
import LanguageToggle from './useContext/LanguageToggle'
import React, { useState } from 'react';
import { LoginContext } from './useContext/LoginContext'
import LoginStatus from './useContext/LoginStatus'
import FocoAutomatico from './useRef/FocoAutomatico'
import CirculoColorido from './useRef/CirculoColorido'
import ScrollDemo from './useRef/ScrollDemo'
import ReproductorSonido from './useRef/ReproductorSonido'
import MoverCaja from './useRef/MoverCaja'
import ExpensiveCalc from './useMemo/ExpensiveCalc'
import FiltroLista from './useMemo/FiltroLista'
import TablaOrdenada from './useMemo/TablaOrdenada'
import PrimosMemo from './useMemo/PrimosMemo'
import ContadorLetras from './useMemo/ContadorLetras'
import Padre from './useCallback/ReRender'
import ContadorReducer from './useReducer/ContadorReducer'
import FormularioReducer from './useReducer/FormularioReducer'
import areaCirculo from './useReducer/areaCirculoReducer'
import ListaReducer from './useReducer/ListaReducer'
import ButtonCounterMP from './components/ButtonCounter_mp'
import ColorBoxMP from './components/ColorBox_mp'
import ConditionalTextMP from './components/ConditionalText_mp'
import EmojiListMP from './components/EmojiList_mp'
import PromedioMP from './components/Promedio_mp'
import ShowDateTimeMP from './components/ShowDate_mp'
import TechStoreWelcomeFormMP from './components/SimpleForm_mp'
import TechTotalCalculatorMP from './components/SumaForm_mp'
import TechProductSearch from './components/TextInput_mp'
import TechProductDetailsToggle from './components/ToggleMessage_mp'
import InputControlado from './components/Ejercicios_practica/components/input_controlado'
import InputControladoInfo from './components/Ejercicios_practica/components/input_controlado_info'
import Incrementar from './components/Ejercicios_practica/components/boton_incremental'
import Invisible from './components/Ejercicios_practica/components/mostrar_ocultar'
import Multiplicacion from './components/Ejercicios_practica/components/multiplicacioni'
import Lista from './components/Ejercicios_practica/components/lista_productos'
import Productos from './Ejercicios_practica/producto_props'
import ContadorBasico from './Ejercicios_practica/contadorBasico'
import AgregarCarrito from './Ejercicios_practica/productItemParent'
import Saludo from './Ejercicios_practica/props/mensaje'
import Input from './Ejercicios_practica/props/input'
import InputParent from './Ejercicios_practica/props/inputParent'
import Calculo from './Ejercicios_practica/props/calculo'
import CalculoParent from './Ejercicios_practica/props/calculoParent'

import Contador from './Ejercicios_practica/usseEffect/contador'
import BotonMensaje from './Ejercicios_practica/usseEffect/botonMensaje'
import SumaParent from './Ejercicios_practica/props/sumaParent'
import AreaTriangulo from './useState/areaTriangulo'
import HorasTrabajadas from './useState/horasTrabajadas'
import CampoTexto from './useId/usedIdHook'
import UseIdHook from './useId/usedIdHook'
import LoginCampos from './useId/loginCampos'
import Mayor from './useId/mayor'
import { BuscadorUseTransition } from './useTransition/buscadorUseTransition'
import { TabsUseTransition } from './useTransition/TabsUseTransition'
import { GaleriaDiferida } from './useTransition/galeriaDeferida'
import ValidacionLogin from './useDeferredValue/loginValidacion'



function App() {  
  const userData = { name: "Carlos", apellido: "Garcia", age: 30, direccion: "10 de Agosto", telefono: "0995678839" };

  const [lang, setLang] = useState('es');
  const toggleLanguage = () => setLang((prev: string) => (prev === 'es' ? 'en' : 'es'));

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => setIsLoggedIn(prev => !prev);

  const saludo = "hola"
  
  return (
    <>
      {/*<Greeting name="Francisco" />
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
      <AutoCounter/>
      <DynamicColor/>
      <ClickHistory/>
      <LogEffect/>
      <FetchUser/>
      <FetchUsers/>
      <Clock/>
      <ScrollLogger/>
      <ScrollLogger/>
      <ScrollLogger/>
      <ScrollLogger/>
      <DynamicTitle/>
      <SafeFetch/>
      <PersistCounter/>

      <LanguageContext.Provider value={{ lang, toggleLanguage }}>
        <LanguageToggle />
      </LanguageContext.Provider>

      <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
        <LoginStatus />
      </LoginContext.Provider>

      <FocoAutomatico/>

      <CirculoColorido/>

      <ScrollDemo/>

      <ReproductorSonido/>

      <MoverCaja/>

      <ExpensiveCalc/>
      <FiltroLista/>
      <TablaOrdenada/>
      <PrimosMemo/>
      <ContadorLetras/>
      <Contador/>
      <Padre/>
      <Saludo/>
      {/*<Lista/>

      <ContadorReducer/>
      <FormularioReducer/>
      {/*<areaCirculo/>
      <ListaReducer/>*/}

      <ButtonCounterMP/>
      <ContadorBasico/>
      <Productos/>
      <ParentInputNotifier/>
      <AgregarCarrito/>
      <Saludo hola={saludo}/>
      <InputParent/>
      <CalculoParent/>
      <Contador/>
      <BotonMensaje/>
      <ScrollDemo/>
      <SumaParent/>
      <AreaTriangulo/>

      <HorasTrabajadas/>
      <UseIdHook/>
      <LoginCampos/>
      <Mayor/>
      <BuscadorUseTransition/>
      <GaleriaDiferida/>
      <ValidacionLogin/>


    </>

    
  );
}

export default App;

