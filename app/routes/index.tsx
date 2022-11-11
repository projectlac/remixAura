import banner1 from "~/assets/images/banner-home-the-gioi-nen-thom-hand-made-sap-dau-nanh-cao-cap-art-of-scent-1 1.png";
import banner2 from "~/assets/images/image 3.png";
import BaseLayout from "~/components/Layouts/BaseLayout";
import ProductList from "~/components/Product/ProductList";
// twixrox;

export default function Index() {
  return (
    <BaseLayout>
      <img src={banner1} alt="" />
      <ProductList />
      <img src={banner2} alt="" />
      <ProductList />
    </BaseLayout>
  );
}
