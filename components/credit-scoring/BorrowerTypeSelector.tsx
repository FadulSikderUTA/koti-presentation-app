import React from 'react';
import { Button } from "./ui/button";

interface BorrowerTypeSelectorProps {
  borrowerType: 'thick-file' | 'thin-file';
  setBorrowerType: (type: 'thick-file' | 'thin-file') => void;
}

const BorrowerTypeSelector: React.FC<BorrowerTypeSelectorProps> = ({ borrowerType, setBorrowerType }) => {
  return (
    <div className="mb-3">
      <h4 className="text-sm font-medium text-brand-text-primary mb-1.5">Borrower Type</h4>
      <div className="flex space-x-2">
        <Button
          variant={borrowerType === 'thick-file' ? 'default' : 'outline'}
          onClick={() => setBorrowerType('thick-file')}
          className={`text-xs ${borrowerType === 'thick-file' ? 'bg-primary/90 hover:bg-primary/80' : 'border-primary/70 text-primary/90 hover:bg-primary/5'}`}
          size="sm"
        >
          <div className="flex items-center">
            <div className={`mr-1.5 w-2 h-2 rounded-full ${borrowerType === 'thick-file' ? 'bg-primary-foreground' : 'bg-primary/70'}`}></div>
            Thick-File
          </div>
        </Button>
        <Button
          variant={borrowerType === 'thin-file' ? 'default' : 'outline'}
          onClick={() => setBorrowerType('thin-file')}
          className={`text-xs ${borrowerType === 'thin-file' ? 'bg-secondary/90 hover:bg-secondary/80' : 'border-secondary/70 text-secondary/90 hover:bg-secondary/5'}`}
          size="sm"
        >
          <div className="flex items-center">
            <div className={`mr-1.5 w-2 h-2 rounded-full ${borrowerType === 'thin-file' ? 'bg-secondary-foreground' : 'bg-secondary/70'}`}></div>
            Thin-File
          </div>
        </Button>
      </div>
    </div>
  );
};

export default BorrowerTypeSelector;