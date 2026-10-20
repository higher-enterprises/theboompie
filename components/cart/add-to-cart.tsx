"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { addItem } from "components/cart/actions";
import { Product, ProductVariant } from "lib/shopify/types";
import { useSearchParams } from "next/navigation";
import { startTransition, useActionState } from "react";
import { useCart } from "./cart-context";

function SubmitButton({
  availableForSale,
  selectedVariantId,
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const buttonClasses =
    "relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white";
  const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

  if (!availableForSale) {
    return (
      <button disabled className={clsx(buttonClasses, disabledClasses)}>
        Out Of Stock
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Please select an option"
        disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        <div className="absolute left-0 ml-4">
          <PlusIcon className="h-5" />
        </div>
        Add To Cart
      </button>
    );
  }

  return (
    <button
      aria-label="Add to cart"
      className={clsx(buttonClasses, {
        "hover:opacity-90": true,
      })}
    >
      <div className="absolute left-0 ml-4">
        <PlusIcon className="h-5" />
      </div>
      Add To Cart
    </button>
  );
}

export function AddToCart({ product }: { product: Product }) {
  const { variants, availableForSale } = product;
  const { addCartItem } = useCart();
  const searchParams = useSearchParams();
  const [message, formAction, isPending] = useActionState(addItem, null);

  // Shopify products with one variant should not require URL option parameters.
  // For multi-variant products, match every selected option against the URL.
  const variant =
    variants.length === 1
      ? variants[0]
      : variants.find((candidate: ProductVariant) =>
          candidate.selectedOptions.every((option) => {
            const selected = searchParams.get(option.name.toLowerCase());
            return selected !== null && selected === option.value;
          }),
        );
  // Fall back to the first purchasable variant when URL options are absent.
  const finalVariant = variant ?? variants.find((candidate) => candidate.availableForSale);
  const selectedVariantId = finalVariant?.id;


  return (
    <form
      action={formAction}
      onSubmit={() => {
        if (finalVariant) {
          startTransition(() => {
            addCartItem(finalVariant, product);
          });
        }
      }}
    >
      <input type="hidden" name="variantId" value={selectedVariantId ?? ""} />
      <fieldset disabled={isPending}>
        <SubmitButton
          availableForSale={availableForSale}
          selectedVariantId={selectedVariantId}
        />
      </fieldset>

      <p aria-live="polite" role="status">
        {variants.length === 0
          ? "This product has no Shopify variants available. Check its Storefront API product query and publication."
          : !selectedVariantId
            ? "No purchasable Shopify variant found for this product."
            : message}
      </p>
    </form>
  );
}
