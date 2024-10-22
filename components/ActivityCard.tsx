import { Link, useNavigation } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ActivityCardProps {
  icon: any;
  title: string;
  route: string | any;
  type?: string;
  param?: string | string[];
}

export default function ActivityCard({
  icon,
  title,
  route,
  type = "",
  param = "",
}: ActivityCardProps) {
  const navigation = useNavigation();
  const finalParam = type === "tank" ? param : null;

  return (
    <Link
      style={{
        paddingHorizontal: 10,
        paddingVertical: 20,
        width: 130,
        gap: 8,
      }}
      href={{
        pathname: route,
        params: { tank: finalParam },
      }}
      asChild
    >
      <TouchableOpacity className="bg-white justify-between rounded-lg">
        {icon}
        <Text className="text-black text-xl font-medium leading-6">
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
}
