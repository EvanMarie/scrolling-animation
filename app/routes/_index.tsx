import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Framer Scroll Animations" },
    {
      name: "description",
      content: "Framer Scroll Animation Experimentation!",
    },
  ];
};

export default function Index() {
  return <>I am your home.</>;
}
