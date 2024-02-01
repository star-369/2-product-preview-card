interface Props {
  category: string;
  heading: string;
  copy: string;
  price: number;
  actualPrice: number;
}

export default function PreviewCard({
  category,
  heading,
  copy,
  price,
  actualPrice,
}: Props) {
  return (
    <main className="w-[350px] rounded-2xl overflow-hidden bg-white md:w-[700px] md:grid grid-cols-2">
      <section
        className="bg-[url(./src/assets/images/image-product-mobile.jpg)] bg-cover bg-center
      w-full h-[18rem] md:bg-[url(./src/assets/images/image-product-desktop.jpg)] md:h-full"
      ></section>
      <section className="p-6 md:p-8 font-montserrat">
        <p className="font-semibold tracking-widest text-dark-grayish-blue md:tracking-[0.5rem]">
          {category}
        </p>
        <h1 className="font-bold text-[2.25rem] font-fraunces text-very-dark-blue leading-[1] my-4 md:my-6 md:text-[3rem]">
          {heading}
        </h1>
        <p className="font-medium text-dark-grayish-blue leading-[1.9] md:text-xl">
          {copy}
        </p>
        <div className="flex items-center gap-4 my-4 md:my-6">
          <p className="text-[2rem] font-bold font-fraunces text-dark-cyan md:text-[2.5rem]">
            ${price}
          </p>
          <p className="line-through text-dark-grayish-blue">${actualPrice}</p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full gap-2 py-4 text-base font-bold text-white rounded-lg cursor-pointer bg-dark-cyan hover:bg-darker-cyan"
        >
          <span>
            <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                fill="#FFF"
              />
            </svg>
          </span>
          <span>Add to Cart</span>
        </button>
      </section>
    </main>
  );
}
