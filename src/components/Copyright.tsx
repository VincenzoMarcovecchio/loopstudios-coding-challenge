export default function Copyright() {
  return (
    <>
      <p className="copy">&copy; 2020 Loopstudios. All rights reserved</p>
      <style jsx>
        {`
          .copy {
            font-size: 1rem;
            text-align: center;
            color: gray;
            margin: 0 auto;
          }

          @media (min-width: 769px) {
            .copy {
              position: absolute;
              right: 10%;
              bottom: 3.5rem;
            }
          }
        `}
      </style>
    </>
  );
}
