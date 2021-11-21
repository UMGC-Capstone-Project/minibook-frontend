import Header from "../components/Header/Header";
import LandingPage from "../pages/LandingPage";
import Bottom from "../components/Bottom/Bottom";
import NewsBoardPage from "../pages/NewsBoardPage";
import ProfilePage from "../pages/ProfilePage";
import Error from "../pages/Error";
import PhotosPage from "../pages/PhotosPage";
import FriendsPage from "../pages/FriendsPage";
import SettingsPage from "../pages/SettingsPage";
import SearchPage from "../pages/SearchPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SingUpPage";
import ForgottenPassword from "../pages/ForgottenPassword";
import UploadPage from "../pages/UploadPage";

export const routes = [
  {
    path: "/",
    exact: true,
    header: <Header login={false} loading={false} />,
    main: <LandingPage />,
    bottom: <Bottom />,
  },
  {
    path: "/sign-in",
    exact: true,
    header: <Header login={false} loading={false} />,
    main: <SignInPage />,
    bottom: <Bottom />,
  },
  {
    path: "/sign-up",
    exact: true,
    header: <Header login={false} loading={false} />,
    main: <SignUpPage />,
    bottom: <Bottom />,
  },
  {
    path: "/forgotten-password",
    exact: true,
    header: <Header login={false} loading={false} />,
    main: <ForgottenPassword />,
    bottom: <Bottom />,
  },
  {
    path: "/newsboard",
    exact: true,
    header: <Header login={true} loading={false} />,
    main: <NewsBoardPage />,
    bottom: <Bottom />,
  },
  {
    path: "/profile/*",
    header: <Header login={true} loading={false} />,
    main: <ProfilePage />,
    bottom: <Bottom />,
  },
  {
    path: "/upload-photo/*",
    header: <Header login={true} loading={false} />,
    main: <UploadPage />,
    bottom: <Bottom />,
  },
  {
    path: "/photos",
    exact: true,
    // header: <Header login={true} />,
    main: <PhotosPage />,
    bottom: <Bottom />,
  },
  {
    path: "/friends",
    exact: true,
    header: <Header login={true} loading={false} />,
    main: <FriendsPage />,
    bottom: <Bottom />,
  },

  {
    path: "/settings",
    exact: true,
    header: <Header login={true} loading={false} />,
    main: <SettingsPage />,
    bottom: <Bottom />,
  },

  {
    path: "/search/*",
    exact: false,
    header: <Header login={true} loading={false} />,
    main: <SearchPage />,
    bottom: <Bottom />,
  },
  {
    path: "/*",
    // exact: true,
    header: <Header login={false} loading={false} />,
    main: <Error />,
    bottom: <Bottom />,
  },
];
