Farmo-Phile

Built a full-stack application (React, Node/Express, Flask/Python) that helps farmers with crop recommendation, crop rotation guidance, fertilizer suggestions, and ML-driven yield prediction, exposed via a clean REST API.

Developed and deployed a reusable ML pipeline (preprocessing + RandomForest regressor) for reliable yield prediction; integrated the pipeline into backend inference endpoints for reproducible, production-style predictions.

Hardened the API for real use by adding guards such as server-side input checks, rate limiting, and health/error endpoints, improving reliability and protecting ML inference from abuse.

Crop Recommendation Metrics:
Accuracy : 99.32%
Precision: 99.37%
Recall   : 99.32%
F1 Score : 99.32%

Crop Yield Prediction Metrics:
MAE : 9.52
RMSE: 157.95
R²  : 0.9722