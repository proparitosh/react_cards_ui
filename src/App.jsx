import Section1 from "./components/Section1/section1"
const App = () => {
  const users = [
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Satisfied"
  },
  {
    img: "https://images.unsplash.com/photo-1598221860268-4c711f099b6d?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Underserved"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1726869985451-2ac216b55b77?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Underbanked"
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Satisfied"
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Emerging"
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Unbanked"
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Satisfied"
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Underserved"
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Underbanked"
  },
  {
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=687&auto=format&fit=crop",
    intro: "",
    tag: "Emerging"
  }
];

  return (
    <div>
      <Section1 user={users}/>
    </div>
  )
}

export default App