import Export from "@/components/icons/Export";
import Hospital from "@/components/icons/Hospital";
import Staff from "@/components/icons/Staff";
import Card from "@/components/utils/Card";
import Link from "@/components/utils/Link";
import { Typography } from "@/components/utils/Typography";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import routes from "../Routes/routes";

const data = [
  {
    name: "Wards",
    Icon: Hospital,
    link: routes.wards,
  },
  {
    name: "Staff",
    Icon: Staff,
    link: routes.staff,
  },
  {
    name: "Export Data",
    Icon: Export,
    link: routes.export_data,
  },
];

const Account = () => {
  const primaryLightColor = useThemeColor("primary-light");
  const placeHolderColor = useThemeColor("placeholder");

  return (
    <View style={{ gap: 15, marginHorizontal: 15, marginVertical: 20 }}>
      {data.map((item) => (
        <Link href={item.link as any} key={item.name}>
          <Card
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: primaryLightColor,
                  padding: 10,
                  borderRadius: 8,
                }}
              >
                <item.Icon width={24} height={24} />
              </View>
              <Typography style={{ fontWeight: 500 }}>{item.name}</Typography>
            </View>
            <Entypo
              name='chevron-small-right'
              size={24}
              color={placeHolderColor}
            />
          </Card>
        </Link>
      ))}
    </View>
  );
};

export default Account;
