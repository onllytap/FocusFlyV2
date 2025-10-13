import { MdFileUpload } from "react-icons/md";
import Card from "components/card";
import React, { useState } from "react";
import PremiumModal from "components/modal/PremiumModal";

const Upload = () => {
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  return (
    <>
      <Card className="grid h-full w-full grid-cols-1 gap-3 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-11">
        <div className="col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6">
          <button className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0">
            <MdFileUpload className="text-[80px] text-brand-500 dark:text-white" />
            <h4 className="text-xl font-bold text-brand-500 dark:text-white">
              Capture Vocale
            </h4>
            <p className="mt-2 text-sm font-medium text-gray-600">
              Appuyez sur Ctrl+Shift+V pour capturer vos pensées
            </p>
          </button>
        </div>

        <div className="col-span-5 flex h-full w-full flex-col justify-center overflow-hidden rounded-xl bg-white pl-3 pb-4 dark:!bg-navy-800">
          <h5 className="text-left text-xl font-bold leading-9 text-navy-700 dark:text-white">
            Passez à Premium
          </h5>
          <p className="leading-1 mt-2 text-base font-normal text-gray-600">
            Débloquez des fonctionnalités avancées et capturez un nombre illimité de pensées
          </p>
          <button
            onClick={() => setShowPremiumModal(true)}
            className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 hover:shadow-lg active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Découvrir Premium
          </button>
        </div>
      </Card>

      {/* Premium Modal */}
      <PremiumModal
        isOpen={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
      />
    </>
  );
};

export default Upload;
