import MyForm from "./MyForm";

function My() {
  return (
    <div className="w-[600px] mx-auto bg-white rounded-xl py-8 px-10 flex flex-col justify-center items-center gap-8">
      <h1 className="font-bold text-xl">MY PAGE</h1>
      <MyForm />
    </div>
  );
}

export default My;
