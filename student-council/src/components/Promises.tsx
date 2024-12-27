import React from 'react'

interface PromisesProps {
    promises: string[];
}

const Promises: React.FC<PromisesProps> = ({ promises }) => {
    return (
        <div className="bg-white p-4">
          <h2 className="text-center text-2xl font-bold">Our Promises</h2>
          <ul className="mt-2 list-inside list-disc">
            {promises.map((promise, index) => (
              <li key={index} className="text-lg">{promise}</li>
            ))}
          </ul>
        </div>
      );

}
export default Promises;