import { Text, View } from "react-native";

type ProductDetailTitleAndSubProps = {
  title: string;
  subtitle: string;
};

const ProductDetailTitleAndSub = ({
  title,
  subtitle,
}: ProductDetailTitleAndSubProps) => {
  return (
    <View>
      <Text className="text-white font-semibold text-[20px]">{title}</Text>
      <Text className="text-white/50 text-[15px]">{subtitle}</Text>
    </View>
  );
};

export default ProductDetailTitleAndSub;
