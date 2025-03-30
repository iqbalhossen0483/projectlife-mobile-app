import config from "@/config/config";
import useStore from "@/hooks/useStore";
import { Image, ImageProps } from "expo-image";
import React from "react";

interface ProfileImageProps extends Omit<ImageProps, "source"> {}

const ProfileImage = (props: ProfileImageProps) => {
  const store = useStore();
  const profile = store?.user?.image;

  const image_url = profile
    ? `${config?.server_url}//${store?.user?.image}`
    : require("../../assets/images/no-photo.png");

  return <Image {...props} source={image_url} />;
};

export default ProfileImage;
