import pandas as pd
df = pd.read_csv("./datasets/crop_yield.csv")

# Candidate interpretations:
# A) Area in m^2, Production in kg  => yield_tph = (prod / 1000) / (area / 10000)
df["yield_if_m2_kg"] = (df["Production"] / 1000.0) / (df["Area"] / 10000.0)

# B) Area in hectares, Production in metric tons => yield_tph = Production / Area
# (guard divide by zero)
df["yield_if_ha_t"] = df["Production"].replace(0, pd.NA) / df["Area"].replace(0, pd.NA)

# C) Area in acres, Production in metric tons => convert area to ha first
df["area_ha_from_acre"] = df["Area"] / 2.47105
df["yield_if_acre_t"] = df["Production"].replace(0, pd.NA) / df["area_ha_from_acre"].replace(0, pd.NA)

# Helper: percent of rows with yield between low and high
def percent_in_range(series, low=0.1, high=10.0):
    s = pd.to_numeric(series, errors="coerce")
    valid = s.dropna()
    if len(valid) == 0:
        return 0.0
    return ( (valid >= low) & (valid <= high) ).sum() / len(valid) * 100

print("Percent in 0.1–10 t/ha range (m2/kg):", percent_in_range(df["yield_if_m2_kg"]))
print("Percent in 0.1–10 t/ha range (ha/t):  ", percent_in_range(df["yield_if_ha_t"]))
print("Percent in 0.1–10 t/ha range (acre/t):", percent_in_range(df["yield_if_acre_t"]))

# Also print medians and a few percentiles to help decide
for col in ["yield_if_m2_kg", "yield_if_ha_t", "yield_if_acre_t"]:
    print(col, "median:", df[col].median(), "  25%:", df[col].quantile(0.25), "  75%:", df[col].quantile(0.75))
