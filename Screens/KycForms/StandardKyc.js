import React, { useEffect, useContext, useState, useMemo } from "react";
import { Form, Text, Button, Content, Textarea, ListItem, CheckBox, Body, Picker, Icon } from "native-base";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import { useForm } from "react-hook-form";

import Axios from "axios";

import CustomHeader from "../../components/shared/Header";
import CustomTextInput from "../../components/shared/TextInput";
import useYupValidationResolver from "../../utils/useYupValidationResolver";
import CustomPicker from "../../components/shared/SelectInput";
import { GlobalContext } from "../../store/contexts/globalContext";
import { beneficiarySchema } from "../../utils/yupFormSchemas";
import config from "../../config";
import CustomPhoneInput from "../../components/shared/PhoneInput";
import globalStyles from "../../styles";

import Typograpghy from "../../Theme";

const { COLORS } = Typograpghy;

const { SERVER_BASE_URL } = config;

const StandardKyc = ({ navigation }) => {
  const {
    state: { countries: globalCountries },
  } = useContext(GlobalContext);

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
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
      bank: "",
      branchName: "",
      bankAccountNumber: "",
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
    <ScrollView>
      <CustomHeader screenTitle="Basic KYC" onPress={navigation.goBack} showCancelBtn onCancel={navigation.goBack} />
      <View style={styles.NotedText}>
        <Text>
          To continue with sending money, you need to verify one of the Know Your Customer (KYC) processes. Thank you.
        </Text>
      </View>
      <Content style={{ padding: 4, paddingLeft: 10 }}>
        <Form>
          <CustomTextInput
            name="fullname"
            control={control}
            label="Full Name"
            errors={errors}
            setValue={setValue}
            requiredMessage="Fullname is required"
          />
          <CustomTextInput
            name="email"
            control={control}
            label="Email address"
            errors={errors}
            setValue={setValue}
            requiredMessage="Email address is required"
          />
          <View>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your Gender"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ padding: 20 }}
            >
              <Picker.Item label="Male" value="key0" />
              <Picker.Item label="Female" value="key1" />
              <Picker.Item label="Others" value="key2" />
            </Picker>
          </View>
          <CustomPhoneInput
            name="mobile"
            control={control}
            label="Mobile number"
            errors={errors}
            setValue={setValue}
            requiredMessage="Mobile number is required"
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
            label={states.length > 0 && selectedCountry ? "Please select a State" : "Select a country to view states"}
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
            label={cities.length > 0 && selectedState ? "Please select  a City" : "Select a state to view cities"}
            onChange={(cityId) => {
              setSelectedCity(cityId);
              setValue("city", cityId);
            }}
          />
          <CustomTextInput
            name="zip"
            control={control}
            label="Zip/Postal code"
            errors={errors}
            setValue={setValue}
            requiredMessage="Zip/Postal code is required"
          />
          <CustomTextInput
            name="address"
            control={control}
            label="Address"
            errors={errors}
            setValue={setValue}
            requiredMessage="Address is required"
          />
          <Textarea rowSpan={4} bordered placeholder="Comment" style={{ marginTop: 15 }} />

          <ListItem>
            <CheckBox style={{ borderColor: COLORS.SECONDARY }} />
            <Body>
              <Text>
                Please check the box to ensure your information is correct to the best of your knowledge, incomplete and
                inaccurate information may delay the approval process.
              </Text>
            </Body>
          </ListItem>
          <Button
            primary
            rounded
            block
            onPress={handleSubmit(onSubmit)}
            style={{ ...globalStyles.btnSecondary, marginBottom: 12, marginTop: 20 }}
          >
            <Text>SUBMIT</Text>
          </Button>
        </Form>
      </Content>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  NotedText: {
    borderWidth: 1,
    borderColor: COLORS.DEFAULT,
    padding: 7,
    margin: 10,
  },
});
export default StandardKyc;
