import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const RouteGuard = ({ children }) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const account = useSelector((state) => state.account?.account);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ["/login"];
    const path = url.split("?")[0];

    if (!account?.type && path !== "/login") {
      setAuthorized(false);
      router.push("/login");
      setLoading(true);
    } else if (account?.type && path === "/login") {
      setAuthorized(true);
      router.push("/dashboard");
      setLoading(true);
    } else {
      setAuthorized(true);
      setLoading(true);
    }

    setLoading(false);
  }

  return (
    <>
      {
        <>
          {loading && (
            <div
              style={{ width: 200, height: 200, backgroundColor: "yellow" }}
            ></div>
          )}
          {authorized && children}
        </>
      }
    </>
  );
};

export default RouteGuard;
