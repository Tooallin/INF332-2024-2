import React, { createContext, useContext, useState } from 'react';

const AyudantesContext = createContext();

export const AyudantesProvider = ({ children }) => {
	const [selectedHelpers, setSelectedHelpers] = useState({});
	const responsibilityLimits = { catedra: 2, corrector: 2, laboratorio: 2 };

	const addHelper = (sigla, helper, selectedOptions) => {
		const updatedHelpers = { ...selectedHelpers }
		if (!updatedHelpers[sigla]) {
			updatedHelpers[sigla] = [];
		}
		const existingHelperIndex = updatedHelpers[sigla].findIndex(h => h.role === helper.role);
		if (existingHelperIndex >= 0) {
			updatedHelpers[sigla][existingHelperIndex].selectedOptions = selectedOptions;
		} else {
			updatedHelpers[sigla].push({ ...helper, selectedOptions });
		}
		setSelectedHelpers(updatedHelpers);
	};

	const removeHelper = (sigla, helper) => {
		const updatedHelpers = { ...selectedHelpers };
		if (!updatedHelpers[sigla]) return;
		updatedHelpers[sigla] = updatedHelpers[sigla].filter(h => h.role !== helper.role);
		setSelectedHelpers(updatedHelpers);
	};

	const getResponsibilityTotal = (sigla) => {
		const helpers = selectedHelpers[sigla] || [];
		const responsibilityCount = { catedra: 0, corrector: 0, laboratorio: 0 };
		helpers.forEach(helper => {
			const selectedOptions = helper.selectedOptions || [];
			selectedOptions.forEach(option => {
				responsibilityCount[option] += 1;
			});
		});
		return {
			...responsibilityCount,
			totalPostulantes: helpers.length,
		};
	};

	const getResponsibilityCount = (sigla, responsibility) => {
		const helpers = selectedHelpers[sigla] || [];
		const count = helpers.reduce((acc, helper) => {
			const rolesCount = helper.selectedOptions?.filter(option => option === responsibility).length || 0;
			return acc + rolesCount;
		}, 0);
		return count;
	};
	
	return (
		<AyudantesContext.Provider
			value={{
				selectedHelpers,
				addHelper,
				removeHelper,
				getResponsibilityTotal,
				getResponsibilityCount,
				responsibilityLimits,
			}}
		>
			{children}
		</AyudantesContext.Provider>
	);
};

export const useAyudantes = () => useContext(AyudantesContext);
