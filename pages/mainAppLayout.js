import PageHeader from "../core/PageHeader";

export default function MainAppLayout({children}) {
  return (
    <div className={["textColor"].join(" ")}>
      <PageHeader/>
      <div className={"mainAppContainer"}>
        {children}
      </div>
    </div>
  );
}
