import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import RippleButton from "../utils/Button";
import Card from "../utils/Card";

interface Props {
  isVisible: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const BottomModal = ({ isVisible, handleClose, children }: Props) => {
  const placeholderColor = useThemeColor("placeholder");

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={handleClose}
      onBackdropPress={handleClose}
      animationIn='slideInUp'
      animationOut='slideOutDown'
      style={{ margin: 0 }}
    >
      <View style={{ flex: 1 }}>
        <Card
          style={{
            height: 200,
            marginTop: "auto",
            borderBottomEndRadius: 0,
            borderBottomLeftRadius: 0,
            position: "relative",
          }}
        >
          <RippleButton
            style={{
              width: "auto",
              height: "auto",
              borderRadius: 100,
              position: "absolute",
              top: 5,
              right: 5,
            }}
            variant='text'
            bgColor='placeholder'
            onPress={handleClose}
          >
            <Ionicons name='close-outline' size={24} color={placeholderColor} />
          </RippleButton>
          <View style={{ width: "100%", marginTop: 10 }}>{children}</View>
        </Card>
      </View>
    </Modal>
  );
};

export default BottomModal;
