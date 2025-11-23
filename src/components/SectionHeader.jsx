import React from 'react';
import Button from './Button';

const SectionHeader = ({ title, actionText, onAction }) => {
    return (
        <div className="flex justify-between items-center mb-6 mt-10">
            <h2 className="text-xl font-normal text-black">
                {title}
            </h2>
            {actionText && (
                <Button
                    variant="outline"
                    onClick={onAction}
                    className="!px-10 !py-3 text-sm font-medium"
                >
                    {actionText}
                </Button>
            )}
        </div>
    );
};

export default SectionHeader;
