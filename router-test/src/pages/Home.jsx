import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="w-full flex justify-center gap-15 items-center">
        <div className="w-150">
          <img
            src="https://gofloaters.com/work-from-anywhere-toolkit/assets/images/remote2.png"
            alt="remote"
          />
        </div>
        <div className="flex flex-col font-bold text-4xl w-[30%] gap-10 text-right items-end">
          <div className="">DOWNLOAD NOW !!!</div>
          <div className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
            hic.
          </div>
          <div className="">
            <Link to="/download" className="bg-orange-600 text-white flex px-5 py-4 items-center w-fit rounded-lg hover:opacity-85 font-[400] gap-5">
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              Download now
            </Link>
          </div>
        </div>
      </div>
      <div className="flex mt-50 flex-col items-center">
        <div className="w-105">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/working-from-a-beachside-cafe-illustration-download-in-svg-png-gif-file-formats--beach-summer-digital-nomad-work-anywhere-pack-holidays-illustrations-11755438.png" alt="" />
        </div>
        <div className="w-[60%] mt-10 mb-15">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque, error tempore doloremque dolorum ratione alias voluptatum ad dolor blanditiis earum eos fuga fugit unde mollitia quam nobis fugiat inventore neque ut rerum id! Nostrum, laboriosam? Rem sunt quas temporibus odit earum veniam reprehenderit quidem, tenetur magnam provident non dolores voluptatibus ab. Corporis, officia iste. Officiis laboriosam numquam possimus asperiores, rerum sunt repellat distinctio ullam atque eum eaque nam nostrum ex veniam doloremque tenetur sed labore maiores pariatur nobis, unde, autem architecto. Repellendus magnam, assumenda nihil culpa, autem molestias velit inventore laboriosam nam veritatis maiores atque voluptatibus, ipsa exercitationem officiis quaerat laborum sit illo suscipit?</div>
      </div>
    </div>
  );
};

export default Home;
