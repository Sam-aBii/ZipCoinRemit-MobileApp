/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext, useState, useMemo } from "react";
import { Button, Container, Content, Form, Text } from "native-base";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { Alert } from "react-native";
import { isEmpty } from "lodash";

import CustomHeader from "../../components/shared/Header";
import CustomTextInput from "../../components/shared/TextInput";
import useYupValidationResolver from "../../utils/useYupValidationResolver";
import CustomPicker from "../../components/shared/SelectInput";
import { GlobalContext } from "../../store/contexts/globalContext";
import { beneficiarySchema, bankSchema, mobileSchema, agentSchema, walletSchema } from "../../utils/yupFormSchemas";
import config from "../../config";
import CustomPhoneInput from "../../components/shared/PhoneInput";
import PaymentReceivingMethods from "../../components/shared/PaymentReceivingMethodsTabs";
import globalStyles from "../../styles";

const { SERVER_BASE_URL } = config;

const AddABeneficiary = ({ navigation }) => {
  const {
    state: { countries: globalCountries },
  } = useContext(GlobalContext);

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const country = globalCountries.find((c) => c.id === selectedCountry);

    if (!isEmpty(country)) {
      country.receivingMethods.forEach((method) => {
        switch (method) {
          case "bank":
            beneficiarySchema.concat(bankSchema);
            break;
          case "agent":
            beneficiarySchema.concat(agentSchema);
            break;
          case "zipCash":
            beneficiarySchema.concat(mobileSchema);
            break;
          case "zipWallet":
            beneficiarySchema.concat(walletSchema);
            break;
          case "mobile":
            beneficiarySchema.concat(mobileSchema);
            break;
          default:
            break;
        }
      });
    }
  }, [selectedCountry, globalCountries]);

  const validationSchema = useMemo(() => beneficiarySchema, []);

  const { handleSubmit, control, errors, setValue } = useForm({
    defaultValues: {
      fullname: null,
      email: null,
      zip: null,
      address: null,
      country: null,
      state: null,
      city: null,
      mobile: null,
      bank: null,
      branchName: null,
      bankAccountNumber: null,
      agent: null,
      agentEmail: null,
      agentLocation: null,
      agentMobile: null,
      walletType: null,
      walletNumber: null,
    },
    reValidateMode: "onChange",
    resolver: useYupValidationResolver(validationSchema),
  });

  useEffect(() => {
    if (selectedCountry) {
      try {
        const fetchStates = async () => {
          const { data: fetchedStates } = await Axios.get(`${SERVER_BASE_URL}/states?countryId=${selectedCountry}`);

          setStates(fetchedStates);
        };
        fetchStates();
      } catch (e) {
        Alert("Something went wrong");
      }
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
      try {
        const fetchCities = async () => {
          const { data: fetchedCities } = await Axios.get(
            `${SERVER_BASE_URL}/cities?stateId=${selectedState}&countryId=${selectedCountry}`
          );
          setCities(fetchedCities);
        };
        fetchCities();
      } catch (e) {
        Alert("Something went wrong");
      }
    }
  }, [selectedCountry, selectedState]);

  // eslint-disable-next-line
  const onSubmit = (data) => {
    // console.log(data);
  };

  return (
    <Container>
      <CustomHeader
        showCancelBtn
        onCancel={() => navigation.goBack()}
        iconName="arrow-back"
        onPress={() => navigation.goBack()}
        screenTitle="Add a beneficiary"
      />
      <Content style={{ paddingHorizontal: 8 }}>
        <Form>
          <CustomTextInput
            name="fullname"
            control={control}
            label="Full name of beneficiary"
            errors={errors}
            setValue={setValue}
            requiredMessage="Fullname is required"
          />
          <CustomTextInput
            name="email"
            control={control}
            label="Email address of beneficiary"
            errors={errors}
            setValue={setValue}
            requiredMessage="Beneficiary email address is required"
          />
          <CustomPicker
            errors={errors}
            requiredMessage="Please select a country"
            control={control}
            name="country"
            items={globalCountries.filter((c) => c.isAcceptable)}
            iosHeader="Please select a country"
            label={globalCountries ? "Please select a country" : "Loading..."}
            selectedValue={selectedCountry}
            onChange={(countryId) => {
              setStates([]);
              setCities([]);
              setSelectedState("");
              setSelectedCountry(countryId);
              setValue("country", countryId);
            }}
          />
          <CustomPicker
            errors={errors}
            requiredMessage="Please select a state"
            control={control}
            name="state"
            items={states}
            iosHeader="Please select a state"
            selectedValue={selectedState}
            label={
              states.length > 0 && selectedCountry
                ? "Select a state"
                : !states.length && selectedCountry
                ? "Loading..."
                : "Select a country to view states"
            }
            onChange={(stateId) => {
              setSelectedState(stateId);
              setValue("state", stateId);
            }}
          />
          <CustomPicker
            errors={errors}
            requiredMessage="Please select a city"
            control={control}
            name="city"
            selectedValue={selectedCity}
            items={cities}
            iosHeader="Please select a city"
            label={
              cities.length > 0 && selectedState
                ? "Select a city"
                : !cities.length && selectedState
                ? "Loading..."
                : "Select a state to view cities"
            }
            onChange={(cityId) => {
              setSelectedCity(cityId);
              setValue("city", cityId);
            }}
          />
          <CustomTextInput
            name="address"
            control={control}
            label="Beneficiary address"
            errors={errors}
            setValue={setValue}
            requiredMessage="Address is required"
          />
          <CustomTextInput
            name="zip"
            control={control}
            label="Zip/Postal code"
            errors={errors}
            setValue={setValue}
            requiredMessage="Zip/Postal code is required"
          />
          <CustomPhoneInput
            name="mobile"
            control={control}
            label="Mobile number"
            errors={errors}
            setValue={setValue}
            requiredMessage="Mobile number is required"
          />
          <PaymentReceivingMethods
            control={control}
            errors={errors}
            setValue={setValue}
            selectedCountry={globalCountries.find((c) => c.id === selectedCountry)}
          />
          <Button
            primary
            rounded
            block
            onPress={handleSubmit(onSubmit)}
            style={{ ...globalStyles.btnSecondary, marginBottom: 12, marginTop: 8 }}
          >
            <Text>ADD</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default AddABeneficiary;
