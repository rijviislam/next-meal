import SearchMeals from "@/component/SearchMeals";

export const metadata = {
  title: {
    absolute: "Meals",
  },
  description: "Meals Page",
};

export default function MealsPage() {
  return (
    <div className="p-12 flex flex-col items-center justify-center">
      <h2 className="text-3xl">Chose Your Meals </h2>
      <p>Choose meals of you choice by searching......</p>
      <SearchMeals />
    </div>
  );
}
