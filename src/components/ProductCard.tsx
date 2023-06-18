import Image, { StaticImageData } from "next/image";

function ProductCard(props: {
  title: string;
  price: number;
  img: StaticImageData;
}) {
  console.log(props.title);
  return (
    <div>
      <Image src={props.img} alt="Product" />
      <h3 className="font-bold text-lg mt-3">{props.title}</h3>
      <p className="font-bold text-lg">{props.price}</p>
    </div>
  );
}

export default ProductCard;
