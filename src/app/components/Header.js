import BackButton from "./BackButton";
//import  header from "@/app/global.css" 
export default function Header({ title }) {
    return (
      <header className="Header">
        <h1>{ title }</h1>
        <div className="header_right">
          <BackButton />
        </div>
      </header>
    );
  };