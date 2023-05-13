export default function renderPage(
  res,
  view,
  layout,
  layoutOption,
  responseOption = {}
) {
  return res.status(200).render(view, {
    layout,
    ...layoutOption,
    ...responseOption,
  });
}

export const studentDashboardOptions = {
  title: "Dashboard",
  user: {
    name: "Focus Enoch",
    reg_no: "2018/344444",
    avatar_url: "images/logo.png",
  },
  drawerContent: [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: "dashboard",
    },
    {
      name: "Profile",
      icon: "account",
      dropDownList: [
        {
          name: "View Profile",
          link: "/assignments",
        },
        {
          name: "Create Account",
          link: "/accounts",
        },
      ],
    },
    {
      name: "Payments",
      link: "/payments",
      icon: "payment",
      dropDownList: [
        {
          name: "Pay Dues",
          link: "/pay",
        },
        {
          name: "Payments",
          link: "/payments",
        },
      ],
    },
    {
      name: "Assignments",
      link: "/assignments",
      icon: "assignment",
      dropDownList: [
        {
          name: "All assignments",
          link: "/",
        },
        {
          name: "Submission",
          link: "/sumbit",
        },
      ],
    },
    {
      name: "Courses",
      link: "/courses",
      icon: "course",
      dropDownList: [
        {
          name: "All Courses",
          link: "/",
        },
        {
          name: "Register Courses",
          link: "/register",
        },
      ],
    },

    {
      name: "E-learning",
      link: "/e-learning",
      icon: "e-learning",
    },
    {
      name: "Results",
      link: "/result",
      icon: "result",
      dropDownList: [
        {
          name: "View Results",
          link: "/",
        },
        {
          name: "Check Result",
          link: "/check-result",
        },
      ],
    },
  ],
};
export const instructorDashboardOptions = {
  title: "Dashboard",
  user: {
    name: "Focus Enoch",
    reg_no: "2018/344444",
    avatar_url: "images/logo.png",
  },
  drawerContent: [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: "dashboard",
    },
    {
      name: "Profile",
      icon: "account",
      dropDownList: [
        {
          name: "View Profile",
          link: "/assignments",
        },
        {
          name: "Create Account",
          link: "/accounts",
        },
      ],
    },
    {
      name: "Payments",
      link: "/payments",
      icon: "payment",
      dropDownList: [
        {
          name: "Pay Dues",
          link: "/pay",
        },
        {
          name: "Payments",
          link: "/payments",
        },
      ],
    },
    {
      name: "Assignments",
      link: "/assignments",
      icon: "assignment",
      dropDownList: [
        {
          name: "All assignments",
          link: "/",
        },
        {
          name: "Submission",
          link: "/sumbit",
        },
      ],
    },
    {
      name: "Courses",
      link: "/courses",
      icon: "course",
      dropDownList: [
        {
          name: "All Courses",
          link: "/",
        },
        {
          name: "Register Courses",
          link: "/register",
        },
      ],
    },

    {
      name: "E-learning",
      link: "/e-learning",
      icon: "e-learning",
    },
    {
      name: "Results",
      link: "/result",
      icon: "result",
      dropDownList: [
        {
          name: "View Results",
          link: "/",
        },
        {
          name: "Check Result",
          link: "/check-result",
        },
      ],
    },
  ],
};
