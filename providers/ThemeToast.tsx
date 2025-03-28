import { Box } from "@/components/utils/Box";
import RippleButton from "@/components/utils/Button";
import Card from "@/components/utils/Card";
import { Typography } from "@/components/utils/Typography";
import useStore from "@/hooks/useStore";
import { useThemeColor } from "@/hooks/useThemeColor";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";

export const ThemedToast = () => {
  const backDropColor = useThemeColor("backDrop");
  const primaryColor = useThemeColor("primary");
  const store = useStore();

  function handleClose() {
    store?.setToastMessage({ title: null, description: null });
    if (store?.toastMessage.onFinished) {
      store.toastMessage.onFinished();
    }
  }

  useEffect(() => {
    if (store?.toastMessage.description) {
      const timer = setTimeout(() => {
        store?.setToastMessage({ title: null, description: null });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [store?.toastMessage.description]);

  if (!store?.toastMessage.description) return null;

  const description = store.toastMessage.description;
  const title = store.toastMessage.title;

  return (
    <Box style={[{ backgroundColor: backDropColor }, styles.container]}>
      <Card style={styles.card}>
        <Pressable onPress={handleClose} style={styles.closeIcon}>
          <Ionicons name='close' size={28} style={{ color: primaryColor }} />
        </Pressable>
        {typeof title === "string" ? (
          <Typography style={{ fontWeight: 500, fontSize: 18 }}>
            {title}
          </Typography>
        ) : (
          title
        )}

        <Typography>{description}</Typography>

        <RippleButton onPress={handleClose} style={{ width: 100 }}>
          <Typography color='white'>Ok</Typography>
        </RippleButton>
      </Card>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "auto",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "80%",
    minHeight: 200,
    paddingTop: 25,
    paddingBottom: 15,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    rowGap: 10,
  },
  closeIcon: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});
