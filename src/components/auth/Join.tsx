import JoinForm from "./JoinForm";

function Join() {
  return (
    <div className="w-[600px] mx-auto bg-white rounded-xl py-8 px-10 flex flex-col justify-center items-center gap-8">
      <h1 className="font-bold text-xl">JOINs</h1>
      <JoinForm />
    </div>
  );
}

export default Join;
