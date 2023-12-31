import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
        console.log(user);
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <InstaLogo>InstaDel</InstaLogo>
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImageContainer>
              <UserImage
                src={user && user.photoUrl}
                onClick={() => signOut(auth)}
              ></UserImage>
              <UserLogOut>Log Out</UserLogOut>
            </UserImageContainer>
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://cdn-icons-png.flaticon.com/512/2312/2312939.png" />
              Send Parcel
            </ActionButton>
          </Link>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://cdn3d.iconscout.com/3d/premium/thumb/parcel-delivery-location-5657929-4713739.png" />
              Large Parcel
            </ActionButton>
          </Link>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
              Reserve
            </ActionButton>
          </Link>
        </ActionButtons>
        <Link href="/search">
          <InputButton>Where to?</InputButton>
        </Link>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen
`;

const ActionItems = tw.div`
flex-1 p-4 select-none
`;

const Header = tw.div`
flex justify-between items-center
`;

const ActionButtons = tw.div`
flex
`;

const UberLogo = tw.img`
h-28 font-bold
`;
const InstaLogo = tw.h2`
h-28 text-3xl font-bold 
`;


const Profile = tw.div`
flex 
`;

const Name = tw.div`
w-50 mr-2 text-sm flex nowrap font-bold mt-3 uppercase
`;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
`;

const ActionButton = tw.div`
h-32 bg-gray-200 m-1 flex-1 flex flex-col items-center rounded-lg justify-center text-xl font-medium cursor-pointer
`;

const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
  h-15 bg-gray-200 text-2xl p-4 flex items-center mt-8 cursor-text
`;

const UserImageContainer = tw.button`
  none opacity-none hover:flex ease-in-out
`;

const UserLogOut = tw.p`
  text-sm text-gray-500 none hover:text-black
`;
