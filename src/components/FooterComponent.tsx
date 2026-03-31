export default function FooterComponent() {
  const listTech = [
    {
      name: "React",
      link: "https://react.dev/",
      icon: "https://react.dev/favicon.ico",
    },
    {
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
      icon: "https://www.typescriptlang.org/favicon-32x32.png",
    },
    {
      name: "Tailwind CSS",
      link: "https://tailwindcss.com/",
      icon: "https://www.typescriptlang.org/favicon-32x32.png",
    },
    {
      name: "React Query",
      link: "https://tanstack.com/query/latest",
      icon: "https://www.typescriptlang.org/favicon-32x32.png",
    },
    {
      name: "React Router",
      link: "https://reactrouter.com/en/main",
      icon: "https://www.typescriptlang.org/favicon-32x32.png",
    },
  ];
  return (
    <div className="flex w-full justify-center items-center p-4 ">
      {listTech.map((item) => (
        <a
          key={item.name}
          href={item.link}
          className="text-blue-500 mr-4 flex items-center"
        >
          {" "}
          {item.name}{" "}
          <img
            src={item.icon}
            alt={item.name}
            className="inline w-4 h-4 ml-1"
          />{" "}
        </a>
      ))}
    </div>
  );
}
