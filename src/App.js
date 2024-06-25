import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const App = () => {
  const [menuData, setMenuData] = useState();
  console.log(menuData);
  useEffect(() => {
    async function fetchData() {
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiZGU2MWYyZDA5YzUwNjQ4OTEzN2NmY2M1NTc1NTE0NWE5MDE1Njc0YTMwYzU3MTJiZDE4YWI1ZmRlYzU0NGMwYWFhODNlNzZkZDU5NTI5MDQiLCJpYXQiOjE3MTkyMzg1NjEuMDg4NzY1LCJuYmYiOjE3MTkyMzg1NjEuMDg4NzY5LCJleHAiOjE3NTA3NzQ1NjEuMDgzMDI0LCJzdWIiOiIyMTkiLCJzY29wZXMiOltdfQ.FmL7ygQPQLIO8IJNJRe6m4-V41raV785WKSglN2RDD_6qOdoTq4-Vbziu11Q7UhdynWwwhfNRh0vHyxh5rwvSz9NOXh2jLic_CwAXRduP54PzG_8CSBFvEV4M_zraxoFrof7bZoJOK2CLgYPCG6-LbzS_SgW0VlhwhxALR-lz4pU1f0FqbCoovHKuZ8e1Ey66nwFv2ND-YUrpa8To84RrwZaICWPw48swoTOOrP4tuXrzBBnbjuXPLQEe9a2uxWOAwXbTdTVF3OespBuAzcWKwAvIl0NJVgiOjAyHvVCvLUZeu4HJxS0s21BNg87jnBqwRQud48TVWYIaz7JX68qLd74pQ8QxUwnrVPYhBULHeLh9g8jhmqp9eM3gbr8twotiWtWKh-noTcB7GNw5N0eVRtI5ye6SfB0qMvRTpusEPWjOQ8I8wiVnd7ajlpUT-MH3wtUMgeLU-E8mXuWL1fAqt43rdsg8MditPB97Jl0Q3uFwZBTF51PGedO7uJ9P-TCPWtCSYTuU2RMiIYnmMmK5_1lcpTyZVjls7WaoFFQVu7qag1_fnXXUN07ZPr3_GCu285M5udd67reTQaiELJtjFkV_zVzuXeNBVic5hE6OxLEK57lEcNn3tb6sJzqUzIpP0uw5TMRMyUa1aXhfau53gEVg2YEICXTr7ySCqvX2Hs";

      const response = await fetch("http://appnox-tm.it/api/v1/menu/tree", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log(data?.result?.data, "-------------");
      setMenuData(data?.result?.data);
    }

    fetchData();
  }, []);
  return (
    <>
      {menuData.map((item) => {
        return (
          <Sidebar>
            <Menu>
              <SubMenu label={item.item}>
                <MenuItem>
                  {" "}
                  {item?.children.map((data) => {
                    return <p>{data?.item}</p>;
                  })}{" "}
                </MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>
        );
      })}
    </>
  );
};

export default App;
