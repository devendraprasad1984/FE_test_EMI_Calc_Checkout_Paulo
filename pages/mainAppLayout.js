import Nav from "../core/nav";

export default function MainAppLayout({children}) {
  return (
    <div className={["textColor"].join(" ")}>
      <Nav/>
      <div className={"rightPanel"}>
        <div className={"mainAppContainerOverlay"}>{children}</div>
      </div>
    </div>
  );
}
