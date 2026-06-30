import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

interface CocopeatlSelectorProps {
  products?: {
    name: string;
    img: string;
    desc: string;
    icon: string;
  }[];
}

export function CocopeatlSelector({ products = [] }: CocopeatlSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<typeof products[0] | null>(null);

  const variants = {
    container: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    },
    image: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4 },
      },
    },
  };

  return (
    <motion.div
      variants={variants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto max-w-2xl rounded-3xl border bg-card p-8"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {/* Product Title */}
      <h3 className="text-2xl font-bold md:text-3xl">5 kg Cocopeat Blocks</h3>
      <p className="mt-2 text-muted-foreground">
        Compressed blocks expanding to ~75 L. Easy to ship, store and rehydrate.
      </p>

      {/* Image Container */}
      <motion.div
        key={selected?.name}
        variants={variants.image}
        initial="hidden"
        animate="visible"
        className="mt-8 aspect-[4/3] overflow-hidden rounded-2xl bg-muted"
      >
        {selected ? (
          <img
            src={selected.img}
            alt={selected.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Select a variant to see the image
          </div>
        )}
      </motion.div>

      {/* Dropdown */}
      <div className="mt-8">
        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Choose Variant
        </label>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-left font-medium hover:border-primary/50 transition flex justify-between items-center"
        >
          <span>{selected ? selected.name : "Select a variant"}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`absolute mt-2 w-full max-w-md rounded-lg border border-border bg-card overflow-hidden z-50 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {products.map((product, index) => (
            <motion.button
              key={product.name}
              onClick={() => {
                setSelected(product);
                setIsOpen(false);
              }}
              whileHover={{ backgroundColor: "var(--bg-hover)" }}
              className={`w-full px-4 py-4 text-left border-b last:border-b-0 flex gap-4 items-start transition ${
                selected?.name === product.name ? "bg-primary/5" : ""
              }`}
            >
              <span className="text-2xl flex-shrink-0">{product.icon}</span>
              <div className="flex-1">
                <p className="font-semibold text-foreground">{product.name}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {product.desc}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Learn More Button */}
      <Button asChild size="lg" className="mt-8 w-full rounded-full">
        <a href="#contact">
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </Button>
    </motion.div>
  );
}