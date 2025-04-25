Your README looks excellent! To further enhance it and clarify how users can use specific versions of the dataset, here
is the updated **Usage** section, now including instructions on how to use different versions of the datasets directly:

---

# JSON Datasets Repository

---

**Description**: A comprehensive repository featuring structured JSON datasets for various purposes, including country
data, weak password lists, geographical information, and more. This repository provides easy access to datasets that can
be integrated into applications, websites, and used for testing or development.

## 📚 Contents

- **🌍 Country Data**: Information about countries, including ISO codes, population, currency, capital cities, etc.
- **🔒 Weak Password Lists**: Commonly used weak passwords for security testing.
- **📍 Geographical Information**: Data about locations, regions, cities, and more.
- **💡 Other Useful Datasets**: Additional datasets for various use cases.

## 🔧 Usage

Download the relevant JSON file and integrate it into your project for testing, development, or other uses. Below is an
example:

```json
{
  "name": "Australia",
  "iso2": "AU",
  "iso3": "AUS",
  "currency": "AUD",
  "population": 25687041,
  "capital": "Canberra"
}
```

## 🔄 Contributing

We welcome community contributions to improve or add new datasets. Follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Add or update datasets in the `datasets/` directory.
4. Commit your changes (git commit -m 'Add new dataset').
5. Push to your fork (git push origin feature-name).
6. Open a pull request.

**Steps for Submitting Datasets**:

- Ensure datasets are in JSON format.
- Follow consistent naming conventions.
- Include descriptions and any relevant metadata.

## How to Use

You can fetch the datasets directly from this repository using the raw GitHub file URLs. This is particularly useful
when you want to always fetch the latest version or a specific version of the dataset.

### Fetching Data from Specific Versions

To fetch a specific version of a dataset, use the following `fetch` API code, replacing `v1.1.0` with your desired
version tag (e.g., `v1.0.0`, `v1.1.0`, etc.).

For example, to fetch the **top common passwords dataset** from version `v1.1.0`, use the code below:

```javascript
fetch("https://raw.githubusercontent.com/parveenkumar94123/json-datasets/v1.1.0/datasets/passwords/top-common-passwords.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // Use the dataset here
    })
    .catch((error) => console.error("Error fetching data:", error));
```

### How to Use the Latest Version

If you always want to fetch the latest available version of the dataset, simply use the **`main`** branch instead of a
specific version tag:

```javascript
fetch("https://raw.githubusercontent.com/parveenkumar94123/json-datasets/main/datasets/passwords/top-common-passwords.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // Use the dataset here
    })
    .catch((error) => console.error("Error fetching data:", error));
```

### List of Available Datasets and Versions

- **Top Common Passwords
  **: [top-common-passwords.json](https://github.com/parveenkumar94123/json-datasets/blob/v1.1.0/datasets/passwords/top-common-passwords.json)
- **Country Data
  **: [country-data.json](https://github.com/parveenkumar94123/json-datasets/blob/v1.1.0/datasets/countries/country-details.json)

To get a list of available tags and versions, visit
the [releases page](https://github.com/parveenkumar94123/json-datasets/releases).

---

## 📜 License

This repository is licensed under the MIT License. Please refer to the LICENSE file for full details.

## ⚠️ Disclaimer

All data is provided "as is." While efforts are made to ensure the accuracy of the data, no guarantees are given
regarding its completeness or correctness. The repository maintainers are not liable for any misuse or errors resulting
from using the datasets.

---

## 📞 Contact

**Parveen Kumar**

- **Portfolio**: [parveenkumar.info](https://parveenkumar.info)
- **Library (UI & Utils)**: [flexifyui.com](https://flexifyui.com)

---
**Note**: This README is a work in progress. Contributions and suggestions for improvement are welcome!
