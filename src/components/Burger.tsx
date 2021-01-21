type Props = {
  active: boolean;
  onClick: () => void;
};
export default function Burger({ active, onClick }: Props) {
  return (
    <>
      {active ? (
        <img
          onClick={onClick}
          src="./images/icon-hamburger.svg"
          className="hamburger"
          alt="challenge"
        />
      ) : (
        <img
          onClick={onClick}
          src="./images/icon-close.svg"
          className="hamburger"
          alt="challenge"
        />
      )}
    </>
  );
}
