import MiddleModal from "@/components/common/MiddleModal";
import RippleButton from "@/components/utils/Button";
import { Typography } from "@/components/utils/Typography";
import useStore from "@/hooks/useStore";
import { useThemeColor } from "@/hooks/useThemeColor";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useEffect } from "react";
import { View } from "react-native";

export const ThemedToast = () => {
  const successColor = useThemeColor("success");
  const store = useStore();

  function handleClose() {
    store?.setToastMessage({ type: null, message: null });
    if (store?.toastMessage.onFinished) {
      store.toastMessage.onFinished();
    }
  }

  useEffect(() => {
    if (store?.toastMessage.message) {
      const timer = setTimeout(() => {
        store?.setToastMessage({ type: null, message: null });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [store?.toastMessage.message]);

  if (!store?.toastMessage.message) return null;

  const description = store.toastMessage.message;
  const type = store.toastMessage.type;
  const icon = store.toastMessage.icon;

  return (
    <MiddleModal
      animationIn={type === "failed" ? "wobble" : "zoomIn"}
      isVisible={!!description}
      handleClose={handleClose}
    >
      <View style={{ alignItems: "center" }}>
        {icon && icon}
        {type === "success" && (
          <MaterialIcons name='check-circle' size={50} color={successColor} />
        )}
        {type === "failed" && (
          <Image
            style={{ height: 40, width: 40 }}
            contentFit='contain'
            source={require("../assets/icons/alert.svg")}
          />
        )}

        <Typography style={{ fontWeight: 500, marginTop: 5 }}>
          {description}
        </Typography>

        <RippleButton
          onPress={handleClose}
          style={{ width: 100, marginTop: 20 }}
        >
          <Typography color='white'>Ok</Typography>
        </RippleButton>
      </View>
    </MiddleModal>
  );
};
