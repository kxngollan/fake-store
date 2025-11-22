import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  const short = product?.description
    ? product?.description.split(/\s+/).slice(0, 10).join(" ") + "…"
    : "";
  return (
    <Link href={`/product/${product.slug}`}>
      <Card className="pt-0 overflow-hidden min-h-[400px]">
        <div className="relative aspect-video">
          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
              className="object-contain"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{short}</CardDescription>
        </CardHeader>

        <CardFooter>
          <p>{formatPrice(product.price)}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
